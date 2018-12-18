package ikb.service.dto;

import javax.validation.constraints.Size;

import ikb.categorie.Categorie;

public class CategorieDTO {
    private Long id;

    @Size(max = 100)
    private String name;

    public CategorieDTO() {

    }

    public CategorieDTO(Categorie categorie) {
        this.id = categorie.getId();
        this.name = categorie.getName();
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String tostring() {
        return "CategorieDTO{" + "id='" + id + '\'' + ", name='" + name + '\'' + "}";
    }

}