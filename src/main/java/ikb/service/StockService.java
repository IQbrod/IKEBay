package ikb.service;


import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.transaction.annotation.Transactional;

import ikb.stock.Stock;
import ikb.repository.StockRepository;
import ikb.service.dto.StockDTO;

/**
 * Service class for managing users.
 */
@Service
@Transactional
public class StockService {

    private final Logger log = LoggerFactory.getLogger(StockService.class);

    private final StockRepository stockRepository;

    public StockService(StockRepository stockRepository){
        this.stockRepository = stockRepository;
    }

    public Page<StockDTO> getAllManagedStocks(Pageable pageable){       
        return stockRepository.findAll(pageable).map(StockDTO::new);
    }
    public Optional<StockDTO> getStock(Long id){
        return stockRepository.findOneById(id).map(StockDTO::new);
    }

    public Stock createStock(StockDTO stockDTO){
        Stock stock = new Stock();
        stock.setId(stockDTO.getId());
        stock.setIdPro(stockDTO.getIdPro());
        stock.setQuantite(stockDTO.getQuantite());
        stock.setReServer(stockDTO.getReServer());
        stockRepository.save(stock);
        log.debug("Created Information for Stock: {}", stock);
        return stock;
    }

    //public void UpdateProduct();
    //public void DeleteProduct(); //note : should instead set a flag (named for example 'hidden') in the product), as we want to keep it in database
    //public void getCategoryProducts(Long categoryId);
}