package ikb.web.rest.vm;

import ikb.service.dto.CategorieDTO;;

/**
 * View Model extending the CategorieDTO, which is meant to be used in the Categorie management UI.
 */

public class CategorieVM extends CategorieDTO{


    public CategorieVM(){

    }

    public String toString() {
        return "CategorieVM{" +
            "} " + super.toString();
    }
}