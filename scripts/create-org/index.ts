/* eslint-disable no-console */
import {
  CreateUserInput,
  CreateUserUseCase,
  CREATE_USER_UC_PROVIDER,
  CreateOrganizationInput,
  CreateOrganizationUseCase,
  CREATE_ORGANIZATION_UC_PROVIDER,
} from '@libs/organizations';
import { container } from './container';

const createOrgUseCase = container.get<CreateOrganizationUseCase>(
  CREATE_ORGANIZATION_UC_PROVIDER
);

const createUserUseCase = container.get<CreateUserUseCase>(
  CREATE_USER_UC_PROVIDER
);

const createOrgWithContact = async () => {
  const organizationPayload: CreateOrganizationInput = {
    name: 'Cazé Lanches',
    businessSegment: 'alimentação',
    locations: [],
  };

  const createdOrg = await createOrgUseCase.execute(organizationPayload);

  const organizationContact: CreateUserInput = {
    organizationId: String(createdOrg._id),
    email: 'yumoto.paidoteufilho@gmail.com',
    firstName: 'Yumoto',
    lastName: 'Pai do seu filho ne',
    phoneNumber: '1399999999',
    password: 'xesquedeleee',
  };

  const createdUser = await createUserUseCase.execute(organizationContact);

  return { createdOrg, createdUser };
};

createOrgWithContact()
  .then((result) => {
    console.log(result);
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
