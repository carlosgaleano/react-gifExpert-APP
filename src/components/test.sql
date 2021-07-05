USE [FullStar_Data]
GO
/****** Object:  StoredProcedure [dbo].[consulta_tracking3]    Script Date: 02-07-2021 13:45:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Autho  <Carlos Galeano -Cristian Ulloa>
-- Create date: <Create Date,,>
-- Description:   <Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[consulta_tracking3] 
                -- Add the parameters for the stored procedure here
                @fechai datetime,
                @fechaf datetime,
                @Norden varchar(20),
				@estado varchar(20),
				@titulo varchar(20)

                


AS

                Declare 
                @fecha_i datetime,
                @fecha_f datetime,
                @N_orden varchar(20),
				@consulta varchar(max),
				@nordenn int,
				@estado_in varchar(20),
				@titulo_in varchar(20)
                -- (dh.Fecha_Despachado>=@fecha_i and dh.Fecha_Despachado <= @fecha_f) or( dh.sap_id like '%'+@Norden+'%' or  dh.Despacho_ID like '%'+@Norden+'%'  ) 
BEGIN
                -- SET NOCOUNT ON added to prevent extra result sets from
                -- interfering with SELECT statements.
                SET NOCOUNT ON;

				--set @consulta='tewdsd';
                SET @fecha_i=@fechai;
                SET @fecha_F=@fechaf;
                SET @N_orden=@Norden;
                set @nordenn =null;
				set @estado_in=@estado;
				set @titulo_in=@titulo;  


				IF @titulo_in IS not NULL AND @estado_in IS not NULL
BEGIN
select  * FROM  vw_Despachos_tracking_view


WHERE


 --(Nombre like '%'+@titulo_in+'%' AND convert(varchar,Status_ID)  like '%'+@estado_in+'%'  )
 status_id =@estado_in
end

        else IF @fecha_i IS NULL AND @fecha_f IS NULL
                BEGIN
                --SET @CONSULTAINICIAL = @CONSULTAINICIAL +' dh.Fecha_Despachado>='+convert(varchar,@fecha_i )+' and dh.Fecha_Despachado <= '+convert(varchar,@fecha_f );
			select  * FROM  vw_Despachos_tracking_view


WHERE


           (Sap_Id  like '%'+@Norden+'%' or convert(varchar,Despacho_ID)  like '%'+@Norden+'%'  )
               -- and  (   dh.Despacho_ID  =convert(numeric,@N_orden ));
			   
              --  return @consulta;
                END

                ELSE 
   BEGIN
select  * FROM  vw_Despachos_tracking_view

WHERE

 (( Fecha_Despachado >= @fecha_i and   Fecha_Despachado  <= @fecha_f ) or ( Fecha_Despacho >= @fecha_i and   Fecha_Despacho  <= @fecha_f ) )
                               
                END 
  

END
