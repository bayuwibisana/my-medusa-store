import {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"
import { createBrandWorkflow } from "../../../workflows/create-brand"
import type { PostAdminCreateBrandType } from "./validators"

export async function POST(
  req: MedusaRequest<PostAdminCreateBrandType>,
  res: MedusaResponse
) {
  const { result } = await createBrandWorkflow(req.scope).run({
    input: req.validatedBody,
  })

  res.json({ brand: result })
}

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const query = req.scope.resolve("query")

  const { data: brands } = await query.graph({
    entity: "brand",
    fields: ["*", "products.*"],
  })

  res.json({ brands })
}
