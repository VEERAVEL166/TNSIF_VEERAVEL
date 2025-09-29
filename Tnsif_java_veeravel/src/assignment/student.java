package assignment;

public class student {

	private int reg;
	private String name;
	private int cgpa;
	
	public int getReg() {
		return reg;
	}
	public void setReg(int reg) {
		this.reg = reg;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getCgpa() {
		return cgpa;
	}
	public void setCgpa(int cgpa) {
		this.cgpa = cgpa;
	}
	@Override
	public String toString() {
		return "student [reg=" + reg + ", name=" + name + ", cgpa=" + cgpa + "]";
	}
	
	

}
