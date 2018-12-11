package ikb.service.dto;

import javax.validation.constraints.Size;

import ikb.stock.Stock;

public class StockDTO {
    private Long id;

    private int quantité;

    private int réserver;



    public StockDTO(){

    }

    public StockDTO(Stock stock){
        this.id = Stock.getId();
        this.quantité = stock.getQuantité();
        this.réserver = stock.getRéServer();
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantité()
	{
		return this.quantité;
	}

	public void setQuantité(int quantité)
	{
		this.quantité = quantité ;
	}
  
    public int getRéServer()
	{
		return this.réserver;
	}

	public void setRéServer(int réserver)
	{
		this.réserver = réserver;
	}


    public String tostring(){
        return "StockDTO{" +
            "id='" + id + '\'' +
            ", quantité'" + quantité + '\'' +
            ", réserver'" + réserver + '\'' +
            "}";
    }



}