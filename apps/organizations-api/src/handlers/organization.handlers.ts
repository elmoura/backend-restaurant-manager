import { APIGatewayEvent } from 'aws-lambda';
import {
  Organization,
  CreateOrganizationUC,
  CreateOrganizationInput,
  CREATE_ORGANIZATION_UC_PROVIDER,
} from '@libs/organizations';
import { LambdaResponse } from '@libs/common';
import { dependenciesContainer } from '../container';

const createOrganizationUseCase =
  dependenciesContainer.get<CreateOrganizationUC>(
    CREATE_ORGANIZATION_UC_PROVIDER
  );

export const createOrganizationHandler = async (
  event: APIGatewayEvent
): Promise<LambdaResponse<Organization>> => {
  const createOrgRequest = JSON.parse(
    event.body || '{}'
  ) as CreateOrganizationInput;

  const createdOrg = await createOrganizationUseCase.execute(createOrgRequest);

  return new LambdaResponse<Organization>({
    statusCode: 201,
    body: createdOrg,
  });
};
