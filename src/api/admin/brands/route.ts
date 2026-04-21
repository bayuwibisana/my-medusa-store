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
