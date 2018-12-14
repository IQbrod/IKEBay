package ikb.stock;

import java.util.Objects;
import javax.persistence.*;
import java.io.Serializable;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.validator.constraints.UniqueElements;

/**
 * A sellable stock.
 */
@Entity
@Table(name = "Stock")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Stock implements Serializable {

    /* Attributes */
    private static final long serialVersionUID = 1L;

    @Id
    /*@GeneratedValue(strategy = GenerationType.IDENTITY)*/
    private Long id;


    @Column(name = "quantite", nullable = false)
    private int quantite;

    @Column(name = "reserver", nullable = false)
    private int reserver;

    /* Methods */

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Stock)) {
            return false;
        }
        Stock stock = (Stock) o;
        return id == stock.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, quantite, reserver);
    }

    @Override
    public String toString() {
        return "{" + " id='" + getId() + 
               "'" + ", quantite='" + getQuantite() + 
               "'" + ", reserver='" + getReServer() + "'" + 
               "}";
    }

    /* Getter & Setter */

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantite() {
        return this.quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    public int getReServer() {
        return this.reserver;
    }

    public void setReServer(int reserver) {
        this.reserver = reserver;
    }

}
