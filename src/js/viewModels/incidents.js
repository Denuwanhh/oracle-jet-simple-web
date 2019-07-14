/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore','knockout','jquery','text!data/data.json','ojs/ojchart','ojs/ojselectcombobox'],
 function(oj, ko, $, file) {

    function IncidentsViewModel() {
      var self = this;

      self.chartnameone   = ko.observable("Bar Chat used ojComponent");
      self.chartnametwo   = ko.observable("Pie/Pie Chat used oj-chart");
      self.chartnamethree = ko.observable("Pie Chat used oj-chart and Load data by external resource");
      self.val            = ko.observable("pie");

      var data = [{name: "Denuwan", items: [43]},
                  {name: "Saman", items: [23]},
                  {name: "Namal", items: [53]},
                  {name: "Gayan", items: [77]},
                  {name: "Pawara", items: [50]},];

      self.datasource = ko.observableArray(data);
      self.databyfile = ko.observableArray(JSON.parse(file));

      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new IncidentsViewModel();
  }
);
