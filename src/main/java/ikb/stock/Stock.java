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
    /* @GeneratedValue(strategy = GenerationType.IDENTITY) */
    private Long productid;

    
    @Column(name = "accountid", nullable = false)
    private Long accountid;

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
        return productid == stock.productid;
    }

    @Override
    public int hashCode() {
        return Objects.hash(productid, quantite, reserver);
    }

    @Override
    public String toString() {
        return "{" + " productid='" + getId() + "'" + ", accountid='" + getAccountid() + "'" + ", quantite='" + getQuantite()
                + "'" + ", reserver='" + getReServer() + "'" + "}";
    }

    /* Getter & Setter */

    public Long getAccountid() {
        return this.accountid;
    }

    public void setAccountid(Long accountid) {
        this.accountid = accountid;
    }

    public Long getId() {
        return this.productid;
    }

    public void setId(Long productid) {
        this.productid = productid;
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
