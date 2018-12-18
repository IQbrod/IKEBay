package ikb.web.rest;

import com.codahale.metrics.annotation.Timed;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import ikb.web.rest.errors.BadRequestAlertException;
import ikb.web.rest.util.HeaderUtil;
import ikb.web.rest.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import ikb.service.CategorieService;
import ikb.config.Constants;
import ikb.categorie.Categorie;
import ikb.security.AuthoritiesConstants;
import ikb.service.dto.CategorieDTO;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class CategorieResource {

    private final Logger log;
    private final CategorieService categorieService;

    public CategorieResource(CategorieService categorieService) {
        this.log = LoggerFactory.getLogger(CategorieResource.class);
        this.categorieService = categorieService;
    }

    /**
     * GET /categories/:id : get the "id" categorie.
     *
     * @param id the id of the categorie to find
     * @return the ResponseEntity with status 200 (OK) and with body the "id"
     *         categorie, or with status 404 (Not Found)
     */
    @GetMapping("/categories")
    @Timed
    public ResponseEntity<List<CategorieDTO>> getCategories() {
        log.debug("REST request to get Categories : {}");
        //sale, mais assure qu'on choppe TOUTES les catégories
        final Page<CategorieDTO> page = this.categorieService.getAllCategories(new PageRequest(0, Integer.MAX_VALUE));
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/categories");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);

    }

    /**
     * POST /categories : Creates a new categorie.
     *
     * @param categorieDTO the user to create
     * @return the ResponseEntity with status 201 (Created) and with body the new
     *         categorie
     * @throws URISyntaxException       if the Location URI syntax is incorrect
     * @throws BadRequestAlertException 400 (Bad Request) if the categorie already has
     *                                  an id
     */
   /*  @PostMapping("/categories")
    @Timed
    @PreAuthorize("hasRole(\"" + AuthoritiesConstants.ADMIN + "\")")
    public ResponseEntity<Categorie> createCategorie(@Validated @RequestBody CategorieDTO categorieDTO)
            throws URISyntaxException {
        log.debug("REST request to save Categorie : {}", categorieDTO);

        if (categorieDTO.getId() != null) {
            throw new BadRequestAlertException("A new categorie cannot already have an ID", "categorieManagement",
                    "idexists");
        } else {
            Categorie newCategorie = categorieService.createCategorie(categorieDTO);
            return ResponseEntity.created(new URI("/api/categories/" + newCategorie.getId()))
                    .headers(HeaderUtil.createAlert("A user is created with identifier " + newCategorie.getId(),
                            Long.toString(newCategorie.getId())))
                    .body(newCategorie);
        }
    } */

    /* @RequestMapping(value = "/categories", method = RequestMethod.GET)
    @Timed
    public ResponseEntity<List<CategorieDTO>> searchCategories(@RequestParam(value = "name", required = false) String name,
            Pageable pageable) {
        final Page<CategorieDTO> page;
        log.debug("==== NAME ==== '" + name + "'");
        if (name == null) {
            log.debug("==== ALL PRODUCTS ==== ");
            page = categorieService.getAllManagedCategories(pageable);
        } else {
            log.debug("==== NAMED PRODUCTS ==== ");
            page = categorieService.getCategoriesByName(name, pageable);
        }
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/categories");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    } */
}