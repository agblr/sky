package com.xmbl.ops.controller.house;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xmbl.ops.commons.domain.DataGridResultInfo;
import com.xmbl.ops.controller.organization.AbstractController;
import com.xmbl.ops.service.house.BasicdataService;
@Controller
@RequestMapping(value = "/basic")
public class BasicdataController extends AbstractController{

	@Autowired
	protected BasicdataService basicdataService;
	
	@RequestMapping("/findProvince")
	public @ResponseBody DataGridResultInfo findProvince(){
		DataGridResultInfo dataGridResultInfo = new DataGridResultInfo();
		dataGridResultInfo.setList(basicdataService.findProvince());
		System.out.println("----"+dataGridResultInfo);
		return dataGridResultInfo;
	}
	
	@RequestMapping("/findCity")
	public @ResponseBody DataGridResultInfo findCity(String provinceCode){
		DataGridResultInfo dataGridResultInfo = new DataGridResultInfo();
		dataGridResultInfo.setList(basicdataService.findCity(provinceCode));
		System.out.println("----"+dataGridResultInfo);
		return dataGridResultInfo;
	}
	
	@RequestMapping("/findDistrict")
	public @ResponseBody DataGridResultInfo findDistrict(String cityCode){
		DataGridResultInfo dataGridResultInfo = new DataGridResultInfo();
		dataGridResultInfo.setList(basicdataService.findDistrict(cityCode));
		System.out.println("----"+dataGridResultInfo);
		return dataGridResultInfo;
	}
	
}
