package ikb.web.rest.vm;

import ikb.service.dto.StockDTO;

/**
 * View Model extending the StockDTO, which is meant to be used in the Stock management UI.
 */

public class StockVM extends StockDTO{


    public StockVM(){

    }

    public String toString() {
        return "StockVM{" +
            "} " + super.toString();
    }
}