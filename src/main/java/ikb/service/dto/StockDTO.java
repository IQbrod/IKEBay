package ikb.service.dto;
import ikb.stock.Stock;

public class StockDTO {
    private Long id;


    private int quantite;

    private int reserver;



    public StockDTO(){

    }

    public StockDTO(Stock stock){
        this.id = stock.getId();
        this.quantite = stock.getQuantite();
        this.reserver = stock.getReServer();
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantite()
	{
		return this.quantite;
	}

	public void setQuantite(int quantite)
	{
		this.quantite = quantite ;
	}
  
    public int getReServer()
	{
		return this.reserver;
	}

	public void setReServer(int reserver)
	{
		this.reserver = reserver;
	}


    public String tostring(){
        return "StockDTO{" +
            "id='" + id + '\'' +
            ", quantite'" + quantite + '\'' +
            ", reserver'" + reserver + '\'' +
            "}";
    }



}