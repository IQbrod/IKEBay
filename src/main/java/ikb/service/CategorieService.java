package ikb.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.transaction.annotation.Transactional;

import ikb.product.Product;
import ikb.repository.CategorieRepository;
import ikb.service.dto.CategorieDTO;

import ikb.service.util.ObjectMapperUtils;

/**
 * Service class for managing users.
 */
@Service
@Transactional
public class CategorieService {

    private final Logger log = LoggerFactory.getLogger(CategorieService.class);

    private final CategorieRepository categorieRepository;

    public CategorieService(CategorieRepository categorieRepository) {
        this.categorieRepository = categorieRepository;
    }

    public Page<CategorieDTO> getAllCategories(Pageable pageable) {
        return categorieRepository.findAll(pageable).map(CategorieDTO::new);
    }

    public List<CategorieDTO> getCategoriesByProductId(Long id) {
        return categorieRepository.findAllByProductId(id).stream().map(CategorieDTO::new).collect(Collectors.toList());
    }

    /* public Page<CategorieDTO> getProductsByName(String name, Pageable pageable) {
        return categorieRepository.findByNameLike(name, pageable).map(CategorieDTO::new);
    } */
/* 
    public Product createProduct(CategorieDTO productDTO) {
        Product product = new Product();
        product.setId(productDTO.getId());
        product.setDescription(productDTO.getDescription());
        product.setName(productDTO.getName());
        product.setPhotolink(productDTO.getPhotolink());
        product.setPrice(productDTO.getPrice());
        product.setSpecification(productDTO.getSpecification());
        categorieRepository.save(product);
        log.debug("Created Information for Product: {}", product);
        return product;
    } */

    // public void UpdateProduct();
    // public void DeleteProduct(); //note : should instead set a flag (named for
    // example 'hidden') in the product), as we want to keep it in database
    // public void getCategoryProducts(Long categoryId);
}