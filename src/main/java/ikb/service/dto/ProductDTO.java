package ikb.service.dto;

import javax.validation.constraints.Size;

import ikb.product.Product;

public class ProductDTO {
    private Long id;

    @Size(max = 1000)
    private String description;

    @Size(max = 1000)
    private String specification;

    @Size(max = 100)
    private String name;

    @Size(max = 100)
    private String photolink;

    private float price;


    public ProductDTO(){

    }

    public ProductDTO(Product product){
        this.id = product.getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.photolink = product.getPhotolink();
        this.price = product.getPrice();
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSpecification() {
        return this.specification;
    }

    public void setSpecification(String specification) {
        this.specification = specification;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhotolink() {
        return this.photolink;
    }

    public void setPhotolink(String photolink) {
        this.photolink = photolink;
    }

    public float getPrice() {
        return this.price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String tostring(){
        return "ProductDTO{" +
            "id='" + id + '\'' +
            ", description'" + description + '\'' +
            ", specification'" + specification + '\'' +
            ", name='" + name + '\'' +
            ", price='" + price + '\'' +
            ", photolink=" + photolink +
            "}";
    }



}