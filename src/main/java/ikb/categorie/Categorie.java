package ikb.categorie;

import javax.persistence.*;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.io.Serializable;

import org.hibernate.annotations.BatchSize;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A sellable Categorie.
 */
@Entity
@Table(name = "Categorie")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Categorie implements Serializable {

    /* Attributes */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 100)
    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @JsonIgnore
    @ManyToMany
    @JoinTable(name = "subcategorie", joinColumns = {
            @JoinColumn(name = "parentid", referencedColumnName = "id") }, inverseJoinColumns = {
                    @JoinColumn(name = "sonid", referencedColumnName = "id") })
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @BatchSize(size = 20)
    private Set<Categorie> souscategories = new HashSet<>();


    /* Methods */
    public Categorie() {
    }

    public Categorie(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Categorie)) {
            return false;
        }
        Categorie categorie = (Categorie) o;
        return id == categorie.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }

    @Override
    public String toString() {
        return "{" + " id='" + getId() + "'" + ", name='" + getName() + "'" + "}";
    }

    /* Getter & Setter */
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Categorie> getSouscategories() {
        return this.souscategories;
    }

    public void setSouscategories(Set<Categorie> souscategories) {
        this.souscategories = souscategories;
    }

}
