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

    public Page<Long> getAllIDs(Pageable pageable){
        return stockRepository.findStockIds(pageable);
    }
    public Optional<StockDTO> getStock(Long id){
        return stockRepository.findOneByProductid(id).map(StockDTO::new);
    }

    public Page<Long> getUserStocks(Pageable pageable, Long id) {
        return stockRepository.findUserStocks(pageable, id);
    }

    public Stock createStock(StockDTO stockDTO){
        Stock stock = new Stock();
        stock.setId(stockDTO.getId());
        stock.setQuantite(stockDTO.getQuantite());
        stock.setReServer(stockDTO.getReServer());
        stockRepository.save(stock);
        log.debug("Created Information for Stock: {}", stock);
        return stock;
    }

    public Optional<StockDTO> updateStock(StockDTO stockDTO) {
        return Optional.of(stockRepository
            .findOneByProductid(stockDTO.getId()))
            .map(Optional::get)
            .map(stock -> {
                stock.setQuantite(stockDTO.getQuantite());
                return stock;
            })
            .map(StockDTO::new);
    }
}