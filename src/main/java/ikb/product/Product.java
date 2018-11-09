package ikb.product;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Objects;

import java.io.Serializable;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A sellable product.
 */
@Entity
@Table(name = "Product")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Product implements Serializable {

/* Attributes */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 1000)
    @Column(name = "description", length = 1000, nullable = false)
    private String description;

    @Size(max = 1000)
    @Column(name = "specification", length = 1000, nullable = false)
    private String specification;

    @Size(max = 100)
    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Size(max = 100)
    @Column(name = "photolink", length = 100, nullable = false)
    private String photolink;

    @Column(name = "price", nullable = false)
    private float price;

/* Methods */

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Product)) {
            return false;
        }
        Product product = (Product) o;
        return id == product.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, specification, name, photolink, price);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", description='" + getDescription() + "'" +
            ", specification='" + getSpecification() + "'" +
            ", name='" + getName() + "'" +
            ", photolink='" + getPhotolink() + "'" +
            ", price='" + getPrice() + "'" +
            "}";
    }

/* Getter & Setter */

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


}
