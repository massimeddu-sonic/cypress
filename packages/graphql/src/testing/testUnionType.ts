/* eslint-disable */
// Generated by codegen-mount-ts.ts, do not edit directly
import type { NexusGenObjects } from '@packages/graphql/src/gen/nxs.gen'
export interface TestSourceTypeLookup {
  App: NexusGenObjects['App'],
  Mutation: NexusGenObjects['Mutation'],
  NavigationItem: NexusGenObjects['NavigationItem'],
  NavigationMenu: NexusGenObjects['NavigationMenu'],
  Project: NexusGenObjects['Project'],
  Query: NexusGenObjects['Query'],
  RunCommit: NexusGenObjects['RunCommit'],
  RunGroup: NexusGenObjects['RunGroup'],
  TestingTypeInfo: NexusGenObjects['TestingTypeInfo'],
  User: NexusGenObjects['User'],
  Wizard: NexusGenObjects['Wizard'],
  WizardBundler: NexusGenObjects['WizardBundler'],
  WizardFrontendFramework: NexusGenObjects['WizardFrontendFramework'],
  WizardNpmPackage: NexusGenObjects['WizardNpmPackage'],
}

import { list, nonNull, queryField, unionType } from 'nexus'

export const testUnionType = unionType({
  name: 'TestUnion',
  definition (t) {
    // !!! Generated by codegen-mount-ts.ts, do not edit directly !!!
    t.members(
      'App',
      'Mutation',
      'NavigationItem',
      'NavigationMenu',
      'Project',
      'Query',
      'RunCommit',
      'RunGroup',
      'TestingTypeInfo',
      'User',
      'Wizard',
      'WizardBundler',
      'WizardFrontendFramework',
      'WizardNpmPackage'
    )
    // !!! Generated by codegen-mount-ts.ts, do not edit directly !!!
  },
  resolveType (c) {
    // @ts-ignore
    return c.__typename ?? c.constructor.name
  },
})

// !!! Generated by codegen-mount-ts.ts, do not edit directly !!!
export const testFragmentMember = queryField('testFragmentMember', {
  description: 'Provides a fragment target for testing',
  type: nonNull(testUnionType),
  resolve: (source) => {
    return source
  }
})

// !!! Generated by codegen-mount-ts.ts, do not edit directly !!!
export const testFragmentMemberList = queryField('testFragmentMemberList', {
  description: 'Provides a fragment target list for testing',
  type: list(nonNull(testUnionType)),
  resolve: (source) => {
    return source
  }
})
