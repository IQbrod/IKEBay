package ikb.service.mapper;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import ikb.stock.Stock;
import ikb.service.dto.StockDTO;

@Service
public class StockMapper {

    public StockDTO stockToStockDTO(Stock stock) {
        return new StockDTO(stock);
    }

    public List<StockDTO> stocksToStockDTOs(List<Stock> stocks) {
        return stocks.stream()
            .filter(Objects::nonNull)
            .map(this::stockToStockDTO)
            .collect(Collectors.toList());
    }

    public Stock stockDTOToStock(StockDTO stockDTO){
        if(stockDTO == null){
            return null;
        }else{
            Stock stock = new Stock();
            stock.setId(stockDTO.getId());
            stock.setQuantite(stockDTO.getQuantite());
            stock.setReServer(stockDTO.getReServer());
            return stock;
        }
    }

    public List<Stock> stockDTOsToStocks(List<StockDTO> stockDTOs) {
        return stockDTOs.stream()
            .filter(Objects::nonNull)
            .map(this::stockDTOToStock)
            .collect(Collectors.toList());
    }

    public Stock stockFromId(Long id) {
        if (id == null) {
            return null;
        }
        Stock stock = new Stock();
        stock.setId(id);
        return stock;
    }
}