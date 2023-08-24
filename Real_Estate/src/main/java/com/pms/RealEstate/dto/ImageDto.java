package com.pms.RealEstate.dto;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.pms.RealEstate.model.Property;

public class ImageDto {

	
	 private int image_id;
	    private Property property;
	  
		private String image_1;
	    private String image_2;
	    private String image_3;
	    private String image_4;
	    private String image_5;
	    public ImageDto() {
			super();
		}
		public ImageDto(int image_id, Property property, String image_1, String image_2, String image_3, String image_4,
				String image_5) {
			super();
			this.image_id = image_id;
			this.property = property;
			this.image_1 = image_1;
			this.image_2 = image_2;
			this.image_3 = image_3;
			this.image_4 = image_4;
			this.image_5 = image_5;
		}
		public int getImage_id() {
			return image_id;
		}
		public void setImage_id(int image_id) {
			this.image_id = image_id;
		}
		public Property getProperty() {
			return property;
		}
		public void setProperty(Property property) {
			this.property = property;
		}
		public String getImage_1() {
			return image_1;
		}
		public void setImage_1(String image_1) {
			this.image_1 = image_1;
		}
		public String getImage_2() {
			return image_2;
		}
		public void setImage_2(String image_2) {
			this.image_2 = image_2;
		}
		public String getImage_3() {
			return image_3;
		}
		public void setImage_3(String image_3) {
			this.image_3 = image_3;
		}
		public String getImage_4() {
			return image_4;
		}
		public void setImage_4(String image_4) {
			this.image_4 = image_4;
		}
		public String getImage_5() {
			return image_5;
		}
		public void setImage_5(String image_5) {
			this.image_5 = image_5;
		}
}



