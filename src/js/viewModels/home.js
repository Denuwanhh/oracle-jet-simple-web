define(['ojs/ojcore', 'knockout', 'ojs/ojmodel', 'ojs/ojcollectiondataprovider', 'factories/departmentfactory','ojs/ojknockout', 'ojs/ojtable'],
  function (oj, ko, Model, CollectionDataProvider, DepartmentFactory) {
    function homeViewModel() {

        /**
        * Whole operation in one single Model (Not Recommended)
        **/
        // this.serviceURL = 'http://localhost:8080/department';
        // this.datasource = ko.observable();

        // this.Department = Model.Model.extend({
        //   urlRoot: this.serviceURL,
        //   idAttribute: 'DepartmentId'
        // });

        // this.myDept = new this.Department();
        // this.DeptCollection = Model.Collection.extend({
        //   url: this.serviceURL,
        //   model: this.myDept,
        //   comparator: "DepartmentId"
        // });

        // this.datasource(new CollectionDataProvider(new this.DeptCollection()));  

        this.datasource = ko.observable();
        this.datasource(new CollectionDataProvider(DepartmentFactory.createDepartmentCollection()));
    }
      
      return new homeViewModel();
  }
);