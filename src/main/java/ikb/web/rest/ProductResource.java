package ikb.web.rest;

import com.codahale.metrics.annotation.Timed;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import ikb.web.rest.errors.BadRequestAlertException;
import ikb.web.rest.util.HeaderUtil;
import ikb.web.rest.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import ikb.service.ProductService;
import ikb.config.Constants;
import ikb.product.Product;
import ikb.repository.ProductRepository;
import ikb.security.AuthoritiesConstants;
import ikb.service.dto.ProductDTO;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductResource {

    private final Logger log;
    private final ProductService productService;
    private final ProductRepository productRepository;

    public ProductResource(ProductService productService, ProductRepository productRepository) {
        this.log = LoggerFactory.getLogger(ProductResource.class);
        this.productService = productService;
        this.productRepository = productRepository;
    }

    /**
     * GET /products : get all products.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and with body all products
     */
    @GetMapping("/products")
    @Timed
    public ResponseEntity<List<ProductDTO>> getAllProducts(Pageable pageable) {
        final Page<ProductDTO> page = productService.getAllManagedProducts(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/users");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET /products/:id : get the "id" product.
     *
     * @param id the id of the product to find
     * @return the ResponseEntity with status 200 (OK) and with body the "id" product, or with status 404 (Not Found)
     */
    @GetMapping("/products/{id:" + Constants.ID_REGEX + "}")
    @Timed
    public ResponseEntity<ProductDTO> getUser(@PathVariable Long id) {
        log.debug("REST request to get Product : {}", id);
        return ResponseUtil.wrapOrNotFound(productService.getProduct(id));
    }

    /**
     * POST  /products  : Creates a new product.
     *
     * @param productDTO the user to create
     * @return the ResponseEntity with status 201 (Created) and with body the new product
     * @throws URISyntaxException if the Location URI syntax is incorrect
     * @throws BadRequestAlertException 400 (Bad Request) if the product already has an id
     */
    @PostMapping("/products")
    @Timed
    @PreAuthorize("hasRole(\"" + AuthoritiesConstants.ADMIN + "\")")
    public ResponseEntity<Product> createProduct(@Validated @RequestBody ProductDTO productDTO) throws URISyntaxException {
        log.debug("REST request to save Product : {}", productDTO);

        if (productDTO.getId() != null) {
            throw new BadRequestAlertException("A new product cannot already have an ID", "productManagement", "idexists");
        } else {
            Product newProduct = productService.createProduct(productDTO);
            return ResponseEntity.created(new URI("/api/products/" + newProduct.getId()))
                .headers(HeaderUtil.createAlert( "A user is created with identifier " + newProduct.getId(), Integer.toString(newProduct.getId())))
                .body(newProduct);
        }
    }
}