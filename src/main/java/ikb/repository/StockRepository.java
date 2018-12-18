package ikb.repository;

import ikb.stock.Stock;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface StockRepository extends JpaRepository<Stock, Integer> {

    Optional<Stock> findOneByProductid(Long id);

    @Query("SELECT p.productid FROM Stock p")
    Page<Long> findStockIds(Pageable pageable);

    @Query("SELECT s.productid FROM Stock s where s.accountid = :accountid")
    Page<Long> findUserStocks(Pageable pageable, @Param("accountid") Long id);
}
