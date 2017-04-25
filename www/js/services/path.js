angular.module('starter.controllers')

.service('BackendPath', function(){
  this.documentServicePath = "http://210.121.158.167:8080";
  this.userServicePath = "http://210.121.158.168:5001";
  this.reviewServicePath = "http://210.121.158.165:8080";
  this.fileServicePath = "http://210.121.158.170:8080";
  this.folderServicePath = "http://210.121.158.166:8080";
  this.publishDocumentServicePath = "http://localhost:8086";
  this.approverListServicePath = "http://210.121.158.162:8080";
})