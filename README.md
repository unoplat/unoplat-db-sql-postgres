# SQL CAPABILITY


# WHAT

(Postgres Operator)[https://github.com/zalando/postgres-operator] is used in conjuction with Postgres UI to provide SQL Capability along with tight integration with unoplat ecosystem.

# WHY

A lot of cross cutting concers such as High availability , Disaster Recovery , Observability(monitoring,logging,alerting), MTLS integration ,Policy Management, User/DataBase Administration , Performance Testing, Upstream Container Vulenrability Management , Data Mesh Integration etc is where an SAAS Firm spends enormous time upon.
We would want to cover all possible cross cutting concerns as part of unoplat postgres infrastructure templates.

# HOW

## SCOPE
- Linkerd Integration with Postgres Operator
- Linkerd Integration with with Postgres UI.
- OpenMetadata Integration for Data Discovery , Collaboration ,Data Validation and Data Management.
- K6 JDBC Integration for Performance Testing Baked in As part of unoplat CI/CD.
- Prometheus/Grafana Integration Baked In for Observability(Monitoring,Alerting and Logging).
- High availability using best kubernetes practices and postgres operator to provide fail over to standby cluster.
- Data Disaster recovery using velero.
- Chaos Testing Templates Baked In for Testing Fault tolerance, High availability. (Framework yet to be decided)
- All CI/CD goodness including container vulnerability management, helm chart vulnerability management , continous updates with upstream by automatic checks against upstream version changes.
- Postgresql Secrets Management using (Sealed Secrets)[https://github.com/bitnami-labs/sealed-secrets].
- Cost Monitoring and Management. (Framework yet to be decided.)
- Open Policy management using OPA.

## CURRENT PROGRESS
- Linkerd Integration with Postgres Operator
- Linkerd Integration with with Postgres UI.
