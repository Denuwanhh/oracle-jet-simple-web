define(['ojs/ojmodel'],
	function(Model){
		var departmentFactory = {
			serviceURL: 'http://localhost:8080/department',

			createDepartmentModel: function (){
				var Department = Model.Model.extend({
		          urlRoot: this.serviceURL,
		          idAttribute: 'DepartmentId'
		        });

		        return new Department();
			},

			createDepartmentCollection: function() {
				var DeptCollection = Model.Collection.extend({
		          	url: this.serviceURL,
		          	model: this.createDepartmentModel(),
		          	comparator: "DepartmentId"
        		});
        		return new DeptCollection();
			}
		};

		return departmentFactory;
	}

	);