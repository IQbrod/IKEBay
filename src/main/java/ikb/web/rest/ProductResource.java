package ikb.web.rest;

import com.codahale.metrics.annotation.Timed;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import ikb.web.rest.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import ikb.service.ProductService;
import ikb.config.Constants;
import ikb.repository.ProductRepository;
import ikb.service.dto.ProductDTO;

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
    public ResponseEntity<ProductDTO> getUser(@PathVariable int id) {
        log.debug("REST request to get Product : {}", id);
        return ResponseUtil.wrapOrNotFound(productService.getProduct(id));
    }
}