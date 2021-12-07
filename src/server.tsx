import { createServer, Response } from 'miragejs';

export function makeServer() {
  let server = createServer({
    routes() {
        this.namespace = "api";
        
        this.post("/submit-application", (schema, request) => {
            const attrs = JSON.parse(request.requestBody);
            const {autoPurchasePrice, autoMake, autoModel, estimatedYearlyIncome, estimatedCreditScore} = attrs;
            
            if (autoPurchasePrice > 1000000) {
                return new Response(400);
            }

            if (autoPurchasePrice > (1/5 * estimatedYearlyIncome)) {
                return new Response(200, undefined, {qualified: false, message: "Purchase price too high"});
            }

            return new Response(200, undefined, {qualified: true, message: "You qaulify!"});;
        })
    }
  });
  return server;
}