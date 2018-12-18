package ikb.repository;

import ikb.product.Product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>, PagingAndSortingRepository<Product, Integer> {

    List<Product> findAllByName(String name);
    Optional<Product> findOneById(Long id);    
    //Page<Product> findByNameLike(String name, Pageable pageable);
    List<Product> findByNameLikeOrderByPrice(String name);

    @Query("SELECT p FROM Product p WHERE p.name LIKE CONCAT('%',:name,'%')")
    Page<Product> findByNameLike(@Param("name") String name, Pageable pageable);

    @Query("SELECT p FROM Product p LEFT JOIN p.categories b WHERE b.id = :id")
    Page<Product> findByCategorie(@Param("id") Long id, Pageable pageable);

    @Query("SELECT p FROM Product p LEFT JOIN p.categories b WHERE p.name LIKE CONCAT('%',:name,'%') AND b.id = :id")
    Page<Product> findByNameLikeAndCategorieEquals(@Param("name") String name, @Param("id") Long id, Pageable pageable);
}
