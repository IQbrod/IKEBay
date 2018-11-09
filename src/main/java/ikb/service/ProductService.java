package ikb.service;


import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.transaction.annotation.Transactional;

import ikb.repository.ProductRepository;
import ikb.service.dto.ProductDTO;

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

    public void getAllProducts(){
    }

    public Page<ProductDTO> getAllManagedProducts(Pageable pageable){       
        return productRepository.findAll(pageable).map(ProductDTO::new);
    }
    public Optional<ProductDTO> getProduct(Long id){
        return productRepository.findOneById(id).map(ProductDTO::new);
    }
    public void createProduct(String name, String description, String specification, String photolink, float price){

        
    }
    //public void UpdateProduct();
    //public void DeleteProduct(); //note : should instead set a flag (named for example 'hidden') in the product), as we want to keep it in database
    //public void getCategoryProducts(Long categoryId);
}