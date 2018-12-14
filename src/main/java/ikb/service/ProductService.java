package ikb.service;


import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.transaction.annotation.Transactional;

import ikb.product.Product;
import ikb.repository.ProductRepository;
import ikb.service.dto.ProductDTO;

import ikb.service.util.ObjectMapperUtils;

/**
 * Service class for managing users.
 */
@Service
@Transactional
public class ProductService {

    private final Logger log = LoggerFactory.getLogger(ProductService.class);

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    public Page<ProductDTO> getAllManagedProducts(Pageable pageable){       
        return productRepository.findAll(pageable).map(ProductDTO::new);
    }

    public Optional<ProductDTO> getProduct(Long id) {
        return productRepository.findOneById(id).map(ProductDTO::new);
    }

    public List<ProductDTO> getProductsByName(String name){
        return ObjectMapperUtils.mapAll(productRepository.findByNameLike(name), ProductDTO.class);
    }

    public Product createProduct(ProductDTO productDTO){
        Product product = new Product();
        product.setId(productDTO.getId());
        product.setDescription(productDTO.getDescription());
        product.setName(productDTO.getName());
        product.setPhotolink(productDTO.getPhotolink());
        product.setPrice(productDTO.getPrice());
        product.setSpecification(productDTO.getSpecification());
        productRepository.save(product);
        log.debug("Created Information for Product: {}", product);
        return product;
    }
    public Page<ProductDTO> getProductsByName(Pageable page, String name) {
        return null;
    }
    //public void UpdateProduct();
    //public void DeleteProduct(); //note : should instead set a flag (named for example 'hidden') in the product), as we want to keep it in database
    //public void getCategoryProducts(Long categoryId);
}