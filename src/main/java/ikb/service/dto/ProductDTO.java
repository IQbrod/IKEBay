

public class ProductDTO {
    private int id;

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

    public ProductDTO(Product Product){
        this.id = product.
    }
}