package ikb.service.mapper;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import ikb.categorie.Categorie;
import ikb.service.dto.CategorieDTO;

@Service
public class CategorieMapper {

    public CategorieDTO categorieToCategorieDTO(Categorie categorie) {
        return new CategorieDTO(categorie);
    }

    public List<CategorieDTO> categoriesToCategorieDTOs(List<Categorie> categories) {
        return categories.stream().filter(Objects::nonNull).map(this::categorieToCategorieDTO).collect(Collectors.toList());
    }

    public Categorie categorieDTOToCategorie(CategorieDTO categorieDTO) {
        if (categorieDTO == null) {
            return null;
        } else {
            Categorie categorie = new Categorie();
            categorie.setId(categorieDTO.getId());
            categorie.setName(categorieDTO.getName());
            return categorie;
        }
    }

    public List<Categorie> categorieDTOsToCategories(List<CategorieDTO> categorieDTOs) {
        return categorieDTOs.stream().filter(Objects::nonNull).map(this::categorieDTOToCategorie)
                .collect(Collectors.toList());
    }

    public Categorie categorieFromId(Long id) {
        if (id == null) {
            return null;
        }
        Categorie categorie = new Categorie();
        categorie.setId(id);
        return categorie;
    }
}