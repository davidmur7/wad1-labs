'use strict';
import logger from "../utils/logger.js";
import employeeInfo from "../models/employee.js";


const about = {
  createView(request, response) {
    logger.info("About page loading!");
      const viewData = {
      title: "Welcome to the Playlist app!",
      employees: employeeInfo.getAppInfo()
    };
 logger.info(viewData.info)
response.render('about', viewData);

  },
};



export default about;