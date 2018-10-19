import JSView from "sap/ui/core/mvc/JSView";
import Page from "sap/m/Page";
import Button from "sap/m/Button";


export default class App extends JSView {

  createContent(C) {
    return (
      <Page
        headerContent={
          <Button
            icon="sap-icon://hello-world"
            press={() => {
              this.oController.getOwnerComponent().openHelloDialog();
            }}
          />
        }
      >
        <JSView viewName="<%= namespace %>.components.HelloPanel" />
        <JSView viewName="<%= namespace %>.components.InvoiceList" />
      </Page>
    );
  }

}