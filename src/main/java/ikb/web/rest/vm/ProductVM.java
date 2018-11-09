package ikb.web.rest.vm;

import ikb.service.dto.ProductDTO;

/**
 * View Model extending the ProductDTO, which is meant to be used in the Product management UI.
 */

public class ProductVM extends ProductDTO{


    public ProductVM(){

    }

    public String toString() {
        return "ProductVM{" +
            "} " + super.toString();
    }
}