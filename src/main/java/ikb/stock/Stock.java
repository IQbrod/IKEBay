package ikb.stock;

import java.util.Objects;
import javax.persistence.*;
import java.io.Serializable;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "quantité", nullable = false)
    private int quantité;

    @Column(name = "réserver", nullable = false)
    private int réserver;

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
        return Objects.hash(id, quantité, réserver);
    }

    @Override
    public String toString() {
        return "{" + " id='" + getId() + 
               "'" + ", quantité='" + getQuantité() + 
               "'" + ", réserver='" + getRéServer() + "'" + 
               "}";
    }

    /* Getter & Setter */

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantité() {
        return this.quantité;
    }

    public void setQuantité(int quantité) {
        this.quantité = quantité;
    }

    public int getRéServer() {
        return this.réserver;
    }

    public void setRéServer(int réserver) {
        this.réserver = réserver;
    }

}
