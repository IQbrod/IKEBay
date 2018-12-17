package ikb.web.rest;

import com.codahale.metrics.annotation.Timed;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import ikb.web.rest.errors.BadRequestAlertException;
import ikb.web.rest.util.HeaderUtil;
import ikb.web.rest.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import ikb.service.StockService;
import ikb.config.Constants;
import ikb.stock.Stock;
import ikb.security.AuthoritiesConstants;
import ikb.service.dto.StockDTO;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class StockResource {

    private final Logger log;
    private final StockService stockService;

    public StockResource(StockService stockService) {
        this.log = LoggerFactory.getLogger(StockResource.class);
        this.stockService = stockService;
    }

    /**
     * GET /stocks : get all stocks.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and with body all stocks
     */
    @GetMapping("/stocksID")
    @Timed
    public ResponseEntity<List<Long>> getAllStocks(Pageable pageable) {
        final Page<Long> page = stockService.getAllIDs(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/stocks");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET /stocks/:id : get the "id" stock.
     *
     * @param id the id of the stock to find
     * @return the ResponseEntity with status 200 (OK) and with body the "id" stock, or with status 404 (Not Found)
     */
    
    @GetMapping("/stocks/{id:" + Constants.ID_REGEX + "}")
    @Timed
    public ResponseEntity<StockDTO> getStockById(@PathVariable Long id) {
        log.debug("REST request to get Stock : {}", id);
        return ResponseUtil.wrapOrNotFound(stockService.getStock(id));
    }
    

     /**
     * GET /stocks/:idPro : get the "idPro" stock.
     *
     * @param idPro the idPro of the stock to find
     * @return the ResponseEntity with status 200 (OK) and with body the "idPro" stock, or with status 404 (Not Found)
     */
    /*
    @GetMapping("/stocks/{idPro:" + Constants.ID_REGEX + "}")
    @Timed
    public ResponseEntity<StockDTO> getStockByIdPro(@PathVariable int idPro) {
        log.debug("REST request to get Stock : {}", idPro);
        return ResponseUtil.wrapOrNotFound(stockService.getStockByIdPro(idPro));
    }
    */

    /**
     * POST  /stocks  : Creates a new stock.
     *
     * @param stockDTO the user to create
     * @return the ResponseEntity with status 201 (Created) and with body the new stock
     * @throws URISyntaxException if the Location URI syntax is incorrect
     * @throws BadRequestAlertException 400 (Bad Request) if the stock already has an id
     */
    @PostMapping("/stocks")
    @Timed
    @PreAuthorize("hasRole(\"" + AuthoritiesConstants.ADMIN + "\")")
    public ResponseEntity<Stock> createStock(@Validated @RequestBody StockDTO stockDTO) throws URISyntaxException {
        log.debug("REST request to save Stock : {}", stockDTO);

        if (stockDTO.getId() != null) {
            throw new BadRequestAlertException("A new stock cannot already have an ID", "stockManagement", "idexists");
        } else {
            Stock newStock = stockService.createStock(stockDTO);
            return ResponseEntity.created(new URI("/api/stocks/" + newStock.getId()))
                .headers(HeaderUtil.createAlert( "A stock is created with identifier " + newStock.getId(), Long.toString(newStock.getId())))
                .body(newStock);
        }
    }
}
