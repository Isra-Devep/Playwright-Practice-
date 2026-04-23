const ADD_ITEM_MUTATION = `fragment SpecItemLibraryDataFragment on ProjectModelsLibraryData {
    libraryItemId
    inventoryItemId
    libraryItemStatus
    libraryUid
    marketplaceEnabled
    orderedQty
    specifiedQty
    alternativeSuppliers
    alternativeManufacturers
    lastPurchaseOrderData {
      currency
      poDate
      poLabel
      poVendor
      poRegion
      project
      unitPrice
      __typename
    }
    __typename
  }
  
  fragment ScheduleActiveColumnsFragment on Schedule {
    id
    activeColumnKeys
    __typename
  }
  
  fragment ProjectModelAreaQuantityFragment on AreaQuantity {
    id
    areaId
    projectModelId
    quantity
    quantityText
    quantityOverride
    isDisabled
    __typename
  }
  
  fragment ProjectModelComponentQuantityFragment on ComponentQuantity {
    id
    quantityText
    quantity
    parentId
    childId
    areaQuantityOverride
    areaQuantityDecimalPlaces
    __typename
  }
  
  fragment FormulaFragment on Formula {
    columnKey
    decimalScale
    id
    archived
    normalized
    operations
    teamId
    updatedAt
    __typename
  }
  
  fragment FormulaRemoveFragment on FormulaRemove {
    columnKey
    id
    removableId
    removableType
    updatedAt
    __typename
  }
  
  fragment CurrencyFragment on Currency {
    id
    disabled
    fractionalUnit
    isoCode
    name
    numberToBasic
    position
    symbol
    territory
    mostUsed
    __typename
  }
  
  fragment CurrencyOverrideFragment on CurrencyOverride {
    id
    baseProjectId
    columnKey
    currency {
      ...CurrencyFragment
      __typename
    }
    currencyId
    overrideableId
    overrideableType
    status
    __typename
  }
  
  fragment ProjectSheetPurchaseOrderFragment on ProcurementPurchaseOrder {
    id
    projectId
    purchaseOrderDate
    label
    status
    __typename
  }
  
  fragment ProjectSheetModelFragment on ProjectModel {
    createdAt
    areaInfo
    label
    projectManagementPhase {
      id
      key
      __typename
    }
    areaQuantities {
      ...ProjectModelAreaQuantityFragment
      __typename
    }
    currencyOverrides {
      nodes {
        ...CurrencyOverrideFragment
        __typename
      }
      __typename
    }
    availableQuantity
    availableQuantityText
    childComponentIds
    clientProposals {
      id
      label
      projectId
      status
      __typename
    }
    purchaseOrderShipments {
      id
      createdAt
      __typename
    }
    customFabricationEnabled
    taxRateLinks {
      id
      taxRateId
      taxType
      __typename
    }
    retailPriceTaxIncluded
    taxOnPurchaseIncluded
    commentsCount
    estDeliveryDate
    estShipDate
    extraQuantity
    extraQuantityDecimalPlaces
    extraQuantityOverride
    extraQuantityPercentage
    extraQuantityEnabled
    packingEnabled
    formulas {
      ...FormulaFragment
      __typename
    }
    formulaRemoves {
      ...FormulaRemoveFragment
      __typename
    }
    data
    highlights
    id
    invoices {
      id
      label
      amountWithTax
      balanceTransactionsAmount
      projectId
      status
      __typename
    }
    isComponent
    isRemoved
    libraryData {
      ...SpecItemLibraryDataFragment
      __typename
    }
    libraryItemWithUpdates
    libraryProjectsCount
    modelStatus
    parentComponentIds
    parentComponentQuantities {
      ...ProjectModelComponentQuantityFragment
      __typename
    }
    position
    poInvoices {
      id
      status
      num
      projectId
      __typename
    }
    poReceivedDate
    poBillTo
    poShipTo
    poShippedDate
    unreadCommentsCount
    unreadEventsCount
    projectId
    purchaseOrderQuantity
    purchaseOrders {
      ...ProjectSheetPurchaseOrderFragment
      __typename
    }
    purchaseOrdersActualQty
    qtyReceived
    shipmentTrackingNum
    quantityPerPakage
    release {
      phaseCode
      code
      date
      id
      __typename
    }
    rfqQuotesStatuses
    shipmentStatus
    scheduleId
    updatedAt
    schedule {
      ...ScheduleActiveColumnsFragment
      name
      code
      __typename
    }
    __typename
  }
  
  mutation AddProjectSheetProjectModel($projectModelAttributes: ProjectModelCreateInput!) {
    projectModelCreate(projectModelAttributes: $projectModelAttributes) {
      errors
      projectModel {
        ...ProjectSheetModelFragment
        __typename
      }
      __typename
    }
  }`;
  
  module.exports = { ADD_ITEM_MUTATION };