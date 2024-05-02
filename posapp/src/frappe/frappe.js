import { createListResource, createDocumentResource } from "frappe-ui";

class Frappe {
  FindMany({ doctype, fields = ["*"], filters = {}, orderBy = "" }) {
    const response = createListResource({
      doctype: doctype,
      fields: fields,
      filters: filters,
      orderBy: orderBy,
      auto: true,
    });
    return response;
  }
  FindOne({ doctype, fields = ["*"], name }) {
    console.log(doctype, fields, name);
    const response = createDocumentResource({
      doctype: doctype,
      fields: fields,
      name: name,
      auto: true,
    });
    // const data =response;
    return response;
  }
  Insert({ doctype, data }) {
    const action = createListResource({
      doctype: doctype,
      auto: true,
      insert: {
        onError(error) {
          return error;
        },
        onSuccess(data) {
          return data;
        },
      },
    });
    action.insert.submit(data);
  }
  Update({ doctype, data }) {
    const action = createListResource({
      doctype: doctype,
      auto: true,
      setValue: {
        onError(error) {
          return error;
        },
        onSuccess(data) {
          return data;
        },
      },
    });
    action.setValue.submit(data);
  }
  Delete({ doctype, id }) {
    const action = createListResource({
      doctype: doctype,
      auto: true,
      delete: {
        onError(error) {
          return error;
        },
        onSuccess(data) {
          return data;
        },
      },
    });
    action.delete.submit(id);
  }
}
const frappe = new Frappe();
export { frappe };