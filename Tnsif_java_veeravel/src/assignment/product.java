package assignment;

public class product {
	private int product_id;
	private String product_name;
	private float price;
	public int getProduct_id() {
		return product_id;
	}
	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "best price ->[product_id=" + product_id + ", product_name=" + product_name + ", price=" + price + "]";
	}
	
}
