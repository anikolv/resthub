package com.rddi.registerapp.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.rddi.registerapp.model.WebServiceStatus;

@JsonInclude(Include.NON_EMPTY)
public class ApiWebServiceEvaluation {

	private String webServiceStatus;
	private Integer lastMonthAvailabilityInPercentage;
	private Integer customerSupportLevelPercentage;
	private Integer averageRating;

	public String getWebServiceStatus() {
		return webServiceStatus;
	}

	public void setWebServiceStatus(String webServiceStatus) {
		this.webServiceStatus = webServiceStatus;
	}

	public Integer getLastMonthAvailabilityInPercentage() {
		return lastMonthAvailabilityInPercentage;
	}

	public void setLastMonthAvailabilityInPercentage(Integer lastMonthAvailabilityInPercentage) {
		this.lastMonthAvailabilityInPercentage = lastMonthAvailabilityInPercentage;
	}

	public Integer getReliabilityPercentage() {
		return customerSupportLevelPercentage;
	}

	public void setReliabilityPercentage(Integer customerSupportLevelPercentage) {
		this.customerSupportLevelPercentage = customerSupportLevelPercentage;
	}

	public Integer getAverageRating() {
		return averageRating;
	}

	public void setAverageRating(Integer averageRating) {
		this.averageRating = averageRating;
	}

}
