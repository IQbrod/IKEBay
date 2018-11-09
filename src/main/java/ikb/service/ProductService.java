package ikb.service;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service class for managing users.
 */
@Service
@Transactional
public class ProductService {

    private final Logger log = LoggerFactory.getLogger(ProductService.class);

    public void getAllProducts();
    public void getProduct(Long id);
    public void createProduct(String name, String description, String specification, String photolink, float price);
    //public void UpdateProduct();
    //public void DeleteProduct(); //note : should instead set a flag (named for example 'hidden') in the product), as we want to keep it in database
    //public void getCategoryProducts(Long categoryId);
}