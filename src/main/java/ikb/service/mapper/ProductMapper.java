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
            product.setId(productDTO.getId());
            product.setId(productDTO.getId());
            product.setId(productDTO.getId());
            product.setId(productDTO.getId());

            return null;
        }
       
    }
}