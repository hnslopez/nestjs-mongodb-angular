'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-c6ee2dd05efe712202b5ea5c78b2cadb20f588f4d63b8782f239ab928b2855351ebbb873729b4a2d09b573a01bbf3ea39bce4a2bc54085e8f3e1f18e22d9d9cf"' : 'data-target="#xs-controllers-links-module-AppModule-c6ee2dd05efe712202b5ea5c78b2cadb20f588f4d63b8782f239ab928b2855351ebbb873729b4a2d09b573a01bbf3ea39bce4a2bc54085e8f3e1f18e22d9d9cf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-c6ee2dd05efe712202b5ea5c78b2cadb20f588f4d63b8782f239ab928b2855351ebbb873729b4a2d09b573a01bbf3ea39bce4a2bc54085e8f3e1f18e22d9d9cf"' :
                                            'id="xs-controllers-links-module-AppModule-c6ee2dd05efe712202b5ea5c78b2cadb20f588f4d63b8782f239ab928b2855351ebbb873729b4a2d09b573a01bbf3ea39bce4a2bc54085e8f3e1f18e22d9d9cf"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c6ee2dd05efe712202b5ea5c78b2cadb20f588f4d63b8782f239ab928b2855351ebbb873729b4a2d09b573a01bbf3ea39bce4a2bc54085e8f3e1f18e22d9d9cf"' : 'data-target="#xs-injectables-links-module-AppModule-c6ee2dd05efe712202b5ea5c78b2cadb20f588f4d63b8782f239ab928b2855351ebbb873729b4a2d09b573a01bbf3ea39bce4a2bc54085e8f3e1f18e22d9d9cf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c6ee2dd05efe712202b5ea5c78b2cadb20f588f4d63b8782f239ab928b2855351ebbb873729b4a2d09b573a01bbf3ea39bce4a2bc54085e8f3e1f18e22d9d9cf"' :
                                        'id="xs-injectables-links-module-AppModule-c6ee2dd05efe712202b5ea5c78b2cadb20f588f4d63b8782f239ab928b2855351ebbb873729b4a2d09b573a01bbf3ea39bce4a2bc54085e8f3e1f18e22d9d9cf"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-582d1decb2acaa44e6fa036c8e4f33bf02100e8faf902a87245bb4e567024faab158feb121beea238b031eca6ed972a7246553658dbc6b7ae5d49bcecc27dafb"' : 'data-target="#xs-injectables-links-module-AuthModule-582d1decb2acaa44e6fa036c8e4f33bf02100e8faf902a87245bb4e567024faab158feb121beea238b031eca6ed972a7246553658dbc6b7ae5d49bcecc27dafb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-582d1decb2acaa44e6fa036c8e4f33bf02100e8faf902a87245bb4e567024faab158feb121beea238b031eca6ed972a7246553658dbc6b7ae5d49bcecc27dafb"' :
                                        'id="xs-injectables-links-module-AuthModule-582d1decb2acaa44e6fa036c8e4f33bf02100e8faf902a87245bb4e567024faab158feb121beea238b031eca6ed972a7246553658dbc6b7ae5d49bcecc27dafb"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SessionSerializer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionSerializer</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/localStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >localStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BranchModule.html" data-type="entity-link" >BranchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BranchModule-bd42dc7ed5862682de73f548758a0c06ca17bdab4d4522b0599f58fd8ad3938c71516f93cd57cc41bdd1e62a401306231168094295e4255cceb6100d66a8d0f3"' : 'data-target="#xs-controllers-links-module-BranchModule-bd42dc7ed5862682de73f548758a0c06ca17bdab4d4522b0599f58fd8ad3938c71516f93cd57cc41bdd1e62a401306231168094295e4255cceb6100d66a8d0f3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BranchModule-bd42dc7ed5862682de73f548758a0c06ca17bdab4d4522b0599f58fd8ad3938c71516f93cd57cc41bdd1e62a401306231168094295e4255cceb6100d66a8d0f3"' :
                                            'id="xs-controllers-links-module-BranchModule-bd42dc7ed5862682de73f548758a0c06ca17bdab4d4522b0599f58fd8ad3938c71516f93cd57cc41bdd1e62a401306231168094295e4255cceb6100d66a8d0f3"' }>
                                            <li class="link">
                                                <a href="controllers/BranchController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BranchController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BranchModule-bd42dc7ed5862682de73f548758a0c06ca17bdab4d4522b0599f58fd8ad3938c71516f93cd57cc41bdd1e62a401306231168094295e4255cceb6100d66a8d0f3"' : 'data-target="#xs-injectables-links-module-BranchModule-bd42dc7ed5862682de73f548758a0c06ca17bdab4d4522b0599f58fd8ad3938c71516f93cd57cc41bdd1e62a401306231168094295e4255cceb6100d66a8d0f3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BranchModule-bd42dc7ed5862682de73f548758a0c06ca17bdab4d4522b0599f58fd8ad3938c71516f93cd57cc41bdd1e62a401306231168094295e4255cceb6100d66a8d0f3"' :
                                        'id="xs-injectables-links-module-BranchModule-bd42dc7ed5862682de73f548758a0c06ca17bdab4d4522b0599f58fd8ad3938c71516f93cd57cc41bdd1e62a401306231168094295e4255cceb6100d66a8d0f3"' }>
                                        <li class="link">
                                            <a href="injectables/BranchService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BranchService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionModule.html" data-type="entity-link" >PermissionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PermissionModule-de933af0c247db65e4e06fcabb308125b06d9affda281fde81d4a655664e8bc5d9ad112ae2f04f02745cc2363036314d2e57a43ca111cad434a354c0da1b6ca0"' : 'data-target="#xs-controllers-links-module-PermissionModule-de933af0c247db65e4e06fcabb308125b06d9affda281fde81d4a655664e8bc5d9ad112ae2f04f02745cc2363036314d2e57a43ca111cad434a354c0da1b6ca0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionModule-de933af0c247db65e4e06fcabb308125b06d9affda281fde81d4a655664e8bc5d9ad112ae2f04f02745cc2363036314d2e57a43ca111cad434a354c0da1b6ca0"' :
                                            'id="xs-controllers-links-module-PermissionModule-de933af0c247db65e4e06fcabb308125b06d9affda281fde81d4a655664e8bc5d9ad112ae2f04f02745cc2363036314d2e57a43ca111cad434a354c0da1b6ca0"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PermissionModule-de933af0c247db65e4e06fcabb308125b06d9affda281fde81d4a655664e8bc5d9ad112ae2f04f02745cc2363036314d2e57a43ca111cad434a354c0da1b6ca0"' : 'data-target="#xs-injectables-links-module-PermissionModule-de933af0c247db65e4e06fcabb308125b06d9affda281fde81d4a655664e8bc5d9ad112ae2f04f02745cc2363036314d2e57a43ca111cad434a354c0da1b6ca0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionModule-de933af0c247db65e4e06fcabb308125b06d9affda281fde81d4a655664e8bc5d9ad112ae2f04f02745cc2363036314d2e57a43ca111cad434a354c0da1b6ca0"' :
                                        'id="xs-injectables-links-module-PermissionModule-de933af0c247db65e4e06fcabb308125b06d9affda281fde81d4a655664e8bc5d9ad112ae2f04f02745cc2363036314d2e57a43ca111cad434a354c0da1b6ca0"' }>
                                        <li class="link">
                                            <a href="injectables/PermissionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RolesModule-214b0fc2460f5e621a7ef470fcae65221c1f180096635c6e0db96d96f47083b249c0be9de907e592de735415034c1e4cfcdd883813b31abc93b0f4a3f1b8f6c8"' : 'data-target="#xs-controllers-links-module-RolesModule-214b0fc2460f5e621a7ef470fcae65221c1f180096635c6e0db96d96f47083b249c0be9de907e592de735415034c1e4cfcdd883813b31abc93b0f4a3f1b8f6c8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-214b0fc2460f5e621a7ef470fcae65221c1f180096635c6e0db96d96f47083b249c0be9de907e592de735415034c1e4cfcdd883813b31abc93b0f4a3f1b8f6c8"' :
                                            'id="xs-controllers-links-module-RolesModule-214b0fc2460f5e621a7ef470fcae65221c1f180096635c6e0db96d96f47083b249c0be9de907e592de735415034c1e4cfcdd883813b31abc93b0f4a3f1b8f6c8"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RolesModule-214b0fc2460f5e621a7ef470fcae65221c1f180096635c6e0db96d96f47083b249c0be9de907e592de735415034c1e4cfcdd883813b31abc93b0f4a3f1b8f6c8"' : 'data-target="#xs-injectables-links-module-RolesModule-214b0fc2460f5e621a7ef470fcae65221c1f180096635c6e0db96d96f47083b249c0be9de907e592de735415034c1e4cfcdd883813b31abc93b0f4a3f1b8f6c8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-214b0fc2460f5e621a7ef470fcae65221c1f180096635c6e0db96d96f47083b249c0be9de907e592de735415034c1e4cfcdd883813b31abc93b0f4a3f1b8f6c8"' :
                                        'id="xs-injectables-links-module-RolesModule-214b0fc2460f5e621a7ef470fcae65221c1f180096635c6e0db96d96f47083b249c0be9de907e592de735415034c1e4cfcdd883813b31abc93b0f4a3f1b8f6c8"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RouterModule.html" data-type="entity-link" >RouterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RouterModule-a07f80088604ffabeb407bacc8eb9439fa9a518112b04f42d591f12fae3cabfe6eebf11fc2438699e0983b6ddfedc573602d73c7caadab590f9f4901106b4f48"' : 'data-target="#xs-controllers-links-module-RouterModule-a07f80088604ffabeb407bacc8eb9439fa9a518112b04f42d591f12fae3cabfe6eebf11fc2438699e0983b6ddfedc573602d73c7caadab590f9f4901106b4f48"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RouterModule-a07f80088604ffabeb407bacc8eb9439fa9a518112b04f42d591f12fae3cabfe6eebf11fc2438699e0983b6ddfedc573602d73c7caadab590f9f4901106b4f48"' :
                                            'id="xs-controllers-links-module-RouterModule-a07f80088604ffabeb407bacc8eb9439fa9a518112b04f42d591f12fae3cabfe6eebf11fc2438699e0983b6ddfedc573602d73c7caadab590f9f4901106b4f48"' }>
                                            <li class="link">
                                                <a href="controllers/RouterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RouterModule-a07f80088604ffabeb407bacc8eb9439fa9a518112b04f42d591f12fae3cabfe6eebf11fc2438699e0983b6ddfedc573602d73c7caadab590f9f4901106b4f48"' : 'data-target="#xs-injectables-links-module-RouterModule-a07f80088604ffabeb407bacc8eb9439fa9a518112b04f42d591f12fae3cabfe6eebf11fc2438699e0983b6ddfedc573602d73c7caadab590f9f4901106b4f48"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RouterModule-a07f80088604ffabeb407bacc8eb9439fa9a518112b04f42d591f12fae3cabfe6eebf11fc2438699e0983b6ddfedc573602d73c7caadab590f9f4901106b4f48"' :
                                        'id="xs-injectables-links-module-RouterModule-a07f80088604ffabeb407bacc8eb9439fa9a518112b04f42d591f12fae3cabfe6eebf11fc2438699e0983b6ddfedc573602d73c7caadab590f9f4901106b4f48"' }>
                                        <li class="link">
                                            <a href="injectables/RouterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-bef343a119542531054d6608f45473c8d30e412d06c1828950f83e3591c93ff8ac66eff4b0866238fc70807b86c2931fb931c99d3a3f7dca864d88cf524f6210"' : 'data-target="#xs-controllers-links-module-UsersModule-bef343a119542531054d6608f45473c8d30e412d06c1828950f83e3591c93ff8ac66eff4b0866238fc70807b86c2931fb931c99d3a3f7dca864d88cf524f6210"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-bef343a119542531054d6608f45473c8d30e412d06c1828950f83e3591c93ff8ac66eff4b0866238fc70807b86c2931fb931c99d3a3f7dca864d88cf524f6210"' :
                                            'id="xs-controllers-links-module-UsersModule-bef343a119542531054d6608f45473c8d30e412d06c1828950f83e3591c93ff8ac66eff4b0866238fc70807b86c2931fb931c99d3a3f7dca864d88cf524f6210"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-bef343a119542531054d6608f45473c8d30e412d06c1828950f83e3591c93ff8ac66eff4b0866238fc70807b86c2931fb931c99d3a3f7dca864d88cf524f6210"' : 'data-target="#xs-injectables-links-module-UsersModule-bef343a119542531054d6608f45473c8d30e412d06c1828950f83e3591c93ff8ac66eff4b0866238fc70807b86c2931fb931c99d3a3f7dca864d88cf524f6210"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-bef343a119542531054d6608f45473c8d30e412d06c1828950f83e3591c93ff8ac66eff4b0866238fc70807b86c2931fb931c99d3a3f7dca864d88cf524f6210"' :
                                        'id="xs-injectables-links-module-UsersModule-bef343a119542531054d6608f45473c8d30e412d06c1828950f83e3591c93ff8ac66eff4b0866238fc70807b86c2931fb931c99d3a3f7dca864d88cf524f6210"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BranchController.html" data-type="entity-link" >BranchController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PermissionController.html" data-type="entity-link" >PermissionController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RouterController.html" data-type="entity-link" >RouterController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateBranchDto.html" data-type="entity-link" >CreateBranchDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRouterDto.html" data-type="entity-link" >CreateRouterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterUserDto.html" data-type="entity-link" >FilterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GlobalService.html" data-type="entity-link" >GlobalService</a>
                            </li>
                            <li class="link">
                                <a href="classes/HashHelper.html" data-type="entity-link" >HashHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/regexHelper.html" data-type="entity-link" >regexHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/sanitizeHelper.html" data-type="entity-link" >sanitizeHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBranchDto.html" data-type="entity-link" >UpdateBranchDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRouterDto.html" data-type="entity-link" >UpdateRouterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BranchService.html" data-type="entity-link" >BranchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtLocalAuthGuard.html" data-type="entity-link" >JwtLocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtNoAuthGuard.html" data-type="entity-link" >JwtNoAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtRefreshGuard.html" data-type="entity-link" >JwtRefreshGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/localStrategy.html" data-type="entity-link" >localStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionService.html" data-type="entity-link" >PermissionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouterService.html" data-type="entity-link" >RouterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RtStrategy.html" data-type="entity-link" >RtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionSerializer.html" data-type="entity-link" >SessionSerializer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthenticatedGuard.html" data-type="entity-link" >AuthenticatedGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/GuestGuard.html" data-type="entity-link" >GuestGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RouterGuard.html" data-type="entity-link" >RouterGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IBranch.html" data-type="entity-link" >IBranch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHash.html" data-type="entity-link" >IHash</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPermisssion.html" data-type="entity-link" >IPermisssion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProfile.html" data-type="entity-link" >IProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRefreshHash.html" data-type="entity-link" >IRefreshHash</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRoles.html" data-type="entity-link" >IRoles</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRouter.html" data-type="entity-link" >IRouter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserHash.html" data-type="entity-link" >IUserHash</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});