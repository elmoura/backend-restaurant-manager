import { LambdaResponse } from '@libs/common';
import {
  CreateOrganizationUseCase,
  CREATE_ORGANIZATION_UC_PROVIDER,
  CreateUserUseCase,
  CREATE_USER_UC_PROVIDER,
} from '@libs/organizations';
import { APIGatewayEvent } from 'aws-lambda';
import { dependenciesContainer } from '../../container';
import {
  CreateOrgWithUserInput,
  CreateOrgWithUserOutput,
} from './dtos/create-org-with-user.dto';

const createOrganizationUseCase =
  dependenciesContainer.get<CreateOrganizationUseCase>(
    CREATE_ORGANIZATION_UC_PROVIDER
  );

const createOrganizationUserUseCase =
  dependenciesContainer.get<CreateUserUseCase>(CREATE_USER_UC_PROVIDER);

export const handler = async (
  event: APIGatewayEvent
): Promise<LambdaResponse<CreateOrgWithUserOutput>> => {
  const payload = JSON.parse(event.body || '{}') as CreateOrgWithUserInput;

  const organization = await createOrganizationUseCase.execute(payload);

  const createdUser = await createOrganizationUserUseCase.execute(payload.user);

  return new LambdaResponse<CreateOrgWithUserOutput>({
    statusCode: 201,
    body: {
      ...organization,
      createdUser,
    },
  });
};
