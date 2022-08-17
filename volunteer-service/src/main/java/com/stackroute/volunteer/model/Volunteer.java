package com.stackroute.volunteer.model;

import javax.annotation.Generated;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("volunteer")
public class Volunteer {

	
private String Vname;
private long vmobile;
private String city;
private String state;
private String address;
private int zipcode;

public Volunteer(String vname, long vmobile, String city, String state, String address, int zipcode) {
	super();
	Vname = vname;
	this.vmobile = vmobile;
	this.city = city;
	this.state = state;
	this.address = address;
	this.zipcode = zipcode;
}
public Volunteer() {
	super();
	
}
public String getVname() {
	return Vname;
}
public void setVname(String vname) {
	Vname = vname;
}
public long getVmobile() {
	return vmobile;
}
public void setVmobile(long vmobile) {
	this.vmobile = vmobile;
}
public String getCity() {
	return city;
}
public void setCity(String city) {
	this.city = city;
}
public String getState() {
	return state;
}
public void setState(String state) {
	this.state = state;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public int getZipcode() {
	return zipcode;
}
public void setZipcode(int zipcode) {
	this.zipcode = zipcode;
}

}
