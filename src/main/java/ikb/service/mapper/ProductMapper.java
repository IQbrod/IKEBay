package ikb.service.mapper;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import ikb.product.Product;
import ikb.service.dto.ProductDTO;

@Service
public class ProductMapper {

    public ProductDTO productToProductDTO(Product product) {
        return new ProductDTO(product);
    }

    public List<ProductDTO> productsToProductDTOs(List<Product> products) {
        return products.stream()
            .filter(Objects::nonNull)
            .map(this::productToProductDTO)
            .collect(Collectors.toList());
    }

    public Product productDTOToProduct(ProductDTO productDTO){
        if(productDTO == null){
            return null;
        }else{
            Product product = new Product();
            product.setId(productDTO.getId());
            product.setDescription(productDTO.getDescription());
            product.setName(productDTO.getName());
            product.setSpecification(productDTO.getSpecification());
            product.setPhotolink(productDTO.getPhotolink());
            product.setPrice(productDTO.getPrice());

            return product;
        }
    }

    public List<Product> productDTOsToProducts(List<ProductDTO> productDTOs) {
        return productDTOs.stream()
            .filter(Objects::nonNull)
            .map(this::productDTOToProduct)
            .collect(Collectors.toList());
    }

    public Product productFromId(Long id) {
        if (id == null) {
            return null;
        }
        Product product = new Product();
        product.setId(id);
        return product;
    }
}