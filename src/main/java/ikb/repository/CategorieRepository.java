package ikb.repository;

import ikb.categorie.Categorie;
import ikb.product.Product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface CategorieRepository
        extends JpaRepository<Categorie, Integer>, CrudRepository<Categorie, Integer> {

    List<Categorie> findAllByName(String name);

    Optional<Categorie> findOneById(Long id);

    @Query("SELECT b from Product p LEFT JOIN p.categories b where p.id = :productid")
    List<Categorie> findAllByProductId(@Param("productid") Long id);
}
